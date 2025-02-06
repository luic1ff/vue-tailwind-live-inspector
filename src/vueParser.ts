import { parse } from '@vue/compiler-sfc';

export function parseVueComponent(text: string) {
  const { descriptor } = parse(text);
  const classes = new Set<string>();

  // Анализ статических и динамических классов
  if (descriptor.template) {
    const ast = descriptor.template.ast;
    traverseTemplate(ast, classes);
  }

  return Array.from(classes);
}

function traverseTemplate(node: any, classes: Set<string>) {
  if (node.type === 1 && node.tag === 'template') {
    node.children.forEach((child: any) => traverseTemplate(child, classes));
  }
  if (node.attrsMap?.class) {
    node.attrsMap.class.split(' ').forEach((cls: string) => classes.add(cls));
  }
}