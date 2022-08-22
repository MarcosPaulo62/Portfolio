var tituloTec = document.getElementById('titulo-tec')
var descricao = document.getElementById('descricao-tec')

function descricaoTec(tec){
    switch(tec) {
        case 'html':
            tituloTec.innerHTML = "HTML"
            descricao.innerHTML = "HTML é uma linguagem de marcação utilizada na construção de páginas na Web."
            break;
        case 'css':
            tituloTec.innerHTML = "CSS"
            descricao.innerHTML = "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web"
            break;
        case 'javascript':
            tituloTec.innerHTML = "JavaScript"
            descricao.innerHTML = "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
            break;
        case 'bootstrap':
            tituloTec.innerHTML = "Bootstrap"
            descricao.innerHTML = "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web."
            break;
        case 'csharp':
            tituloTec.innerHTML = "C#"
            descricao.innerHTML = "C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET."
            break;
        case 'python':
            tituloTec.innerHTML = "Python"
            descricao.innerHTML = "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte."
            break;
        case 'mysql':
            tituloTec.innerHTML = "MySQL"
            descricao.innerHTML = "MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface."
            break;
        case 'git':
            tituloTec.innerHTML = "Git"
            descricao.innerHTML = "Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo."
            break;              
    }
}

function retirarDescricao(){
    tituloTec.innerHTML = ""
    descricao.innerHTML = "Passe o mouse sobre a tecnologia para informações"
}
