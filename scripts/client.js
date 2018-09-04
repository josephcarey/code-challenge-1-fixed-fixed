console.log( 'js' );

addCounter = 1;



$( 'document' ).ready( readyNow );

function readyNow() {
    console.log( 'jQ' );

    $( '#generateButton' ).on( 'click', handleGenerateButton );
    $( '#generatedDiv' ).on( 'click', '.deleteMeButton', handleDeleteMeButton )
    $( '#generatedDiv' ).on( 'click', '.swapColorButton', handleSwapColorButton )

}

function handleGenerateButton() {

    newDivTemplate = `
    <div class="container col-12 red">
        <p>${addCounter}</p>
        <button class="swapColorButton btn btn-secondary">Swap Color</button>
        <button class="deleteMeButton btn btn-secondary">Delete</button>
    </div>
    `

    $( '#generatedDiv' ).append( newDivTemplate );

    addCounter++;

}

function handleDeleteMeButton() {

    // closest is equivalent to running parent().first()
    this.closest( 'div' ).remove();

}

function handleSwapColorButton() {

    console.log( 'in handleSwapColorButton' );


}