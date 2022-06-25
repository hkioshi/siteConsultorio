//#5f71c8, plum, #0303034f

function irParaInicio()
{
    const inicio = document.getElementById('inicio');
    const consultorio = document.getElementById('consultorio');
    const tratamento = document.getElementById('tratamentos');
    const sobrenos = document.getElementById('sobrenos');
    const contato = document.getElementById('contato');

    inicio.style.display = "block";
    consultorio.style.display = "none";
    tratamento.style.display = "none";
    sobrenos.style.display = "none";
    contato.style.display = "none";

}

function irParaConsultorio()
{
    const inicio = document.getElementById('inicio');
    const consultorio = document.getElementById('consultorio');
    const tratamento = document.getElementById('tratamentos');
    const sobrenos = document.getElementById('sobrenos');
    const contato = document.getElementById('contato');
    
    inicio.style.display = "none";
    consultorio.style.display = "block";
    tratamento.style.display = "none";
    sobrenos.style.display = "none";
    contato.style.display = "none";

}

function irParaTratamentos()
{
    const inicio = document.getElementById('inicio');
    const consultorio = document.getElementById('consultorio');
    const tratamento = document.getElementById('tratamentos');
    const sobrenos = document.getElementById('sobrenos');
    const contato = document.getElementById('contato');

    inicio.style.display = "none";
    consultorio.style.display = "none";
    tratamento.style.display = "block";
    sobrenos.style.display = "none";
    contato.style.display = "none";

}

function irParaSobreNos()
{
    const inicio = document.getElementById('inicio');
    const consultorio = document.getElementById('consultorio');
    const tratamento = document.getElementById('tratamentos');
    const sobrenos = document.getElementById('sobrenos');
    const contato = document.getElementById('contato');

    inicio.style.display = "none";
    consultorio.style.display = "none";
    tratamento.style.display = "none";
    sobrenos.style.display = "block";
    contato.style.display = "none";

}

function irParaContato()
{
    const inicio = document.getElementById('inicio');
    const consultorio = document.getElementById('consultorio');
    const tratamento = document.getElementById('tratamentos');
    const sobrenos = document.getElementById('sobrenos');
    const contato = document.getElementById('contato');

    inicio.style.display = "none";
    consultorio.style.display = "none";
    tratamento.style.display = "none";
    sobrenos.style.display = "none";
    contato.style.display = "block";

}