var el = wp.element.createElement;

wp.blocks.registerBlockType('shaiful-gutenberg/titulo-texto', {
	title: 'Título e texto',		// Block name visible to user
	icon: 'lightbulb',	// Toolbar icon can be either using WP Dashicons or custom SVG
	category: 'common',	// Under which category the block would appear
	attributes: {			// The data this block will be storing
		title: { type: 'string' },			// Notice box title in h4 tag
		content: { type: 'array', source: 'children', selector: 'p' }		/// Notice box content in p tag
	},
	edit: function(props) {
		// How our block renders in the editor in edit mode
		
      function updateTitle( event ) {
	      props.setAttributes( { title: event.target.value } );
	   }

	   function updateContent( newdata ) {
	      props.setAttributes( { content: newdata } );
	   }

		return el( 'div', 
			{ 
				className: 'notice-box '
			}, 
			
			el(
				'input', 
				{
					type: 'text', 
					placeholder: 'Coloque seu Tópico',
					value: props.attributes.title,
					onChange: updateTitle,
					style: { width: '100%' }
				}
			),
			el(
				wp.editor.RichText,
            {
               tagName: 'p',
               onChange: updateContent,
               value: props.attributes.content,
               placeholder: 'Coloque seu texto aqui...'
            }
         )

		);	// End return

	},	// End edit()
	save: function(props) {
		// How our block renders on the frontend
		
		return el( 'div', 
			{ 
				className: 'notice-box '
			}, 
			el(
				'h4', 
				null,
				props.attributes.title
			),
			el( wp.editor.RichText.Content, {
            tagName: 'p',
            value: props.attributes.content
         })
			
		);	// End return
		
	}	// End save()
});
/*title,hr, galery, titulo e texto, botoes, */
