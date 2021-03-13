walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	let fullNameFlag = false;
	
	if (v.includes('Michigan State Spartans')) {
		fullNameFlag = true;
		v = v.replace(/\bMichigan State Spartans\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bmichigan state spartans\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bMichigan state spartans\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bMichigan State spartans\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bmichigan State Spartans\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bmichigan state Spartans\b/g, "$& Presented by Rocket Mortgage™");
	}
	if (!fullNameFlag) {
		v = v.replace(/\bMichigan State Spartans\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bMichigan State\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bmichigan state\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bmichigan State\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bMichigan state\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bMichigan St\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bmichigan St\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bMichigan st\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bmichigan st\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bMich St\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bMich st\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bmich st\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bmich St\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bSparty\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bsparty\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bSpartans\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bspartans\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bSpartan\b/g, "$& Presented by Rocket Mortgage™");
		v = v.replace(/\bspartan\b/g, "$& Presented by Rocket Mortgage™");
	}
	
	v = v.replace(/\bBreslin\b/g, "$& Presented by Rocket Mortgage™");
	v = v.replace(/\bbreslin\b/g, "$& Presented by Rocket Mortgage™");
	v = v.replace(/\bIzzo\b/g, "$& Presented by Rocket Mortgage™");
	v = v.replace(/\bizzo\b/g, "$& Presented by Rocket Mortgage™");
	
	textNode.nodeValue = v;
}


