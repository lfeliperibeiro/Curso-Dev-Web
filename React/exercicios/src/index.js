import React from 'react'
import ReactDom from 'react-dom'
// componente tem que ser em letra maiúscula
// import Saudacao from './components/saudacao'

import Pai from './components/pai'
import Filho from './components/filho'


ReactDom.render(
<div>
    <Pai nome="Paulo" sobrenome="Silva">
        {/* como passo componetes Filhos aqui? */}
        <Filho nome="Pedro" />
        <Filho nome="Paulo"  />
        <Filho nome="Carlos" />

    </Pai>
</div>
, document.getElementById('root')) 