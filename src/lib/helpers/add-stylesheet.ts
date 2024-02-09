export function addStylesheet(stylesheet: string, id: string, document: Document) {
  if ( !document.getElementById(id) ) {
    const styleSheetElement = document.createElement("style");
    styleSheetElement.id = id;
    styleSheetElement.innerHTML = stylesheet;
    document.head.appendChild(styleSheetElement);
  }
}
