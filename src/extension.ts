import * as vscode from 'vscode';
import { VueTailwindInspectorPanel } from './inspectorPanel';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('vueTailwind.inspect', () => {
      VueTailwindInspectorPanel.createOrShow(context);
    })
  );
}