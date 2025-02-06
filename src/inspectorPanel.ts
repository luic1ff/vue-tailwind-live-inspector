export class VueTailwindInspectorPanel {
    public static currentPanel: VueTailwindInspectorPanel | undefined;
  
    public static createOrShow(context: vscode.ExtensionContext) {
      const panel = vscode.window.createWebviewPanel(
        'vueTailwindInspector',
        'Tailwind Inspector',
        vscode.ViewColumn.Two,
        { enableScripts: true }
      );
  
      panel.webview.html = `
        <html>
        <body>
          <div id="class-list"></div>
          <script>
            window.addEventListener('message', e => {
              document.getElementById('class-list').innerHTML = 
                e.data.classes.map(c => \`<div class="class-item">$\{c}</div>\`).join('');
            });
          </script>
        </body>
        </html>
      `;
    }
  }