const express = require('express')
const app = express()
app.use(express.json())


app.post('/comprar', (req, res) => {
  const nome = req.body.nome
  const preco = req.body.preco
  const quantidade = req.body.quantidade
  const resultado = quantidade * preco
  
  if(!nome || typeof(preco) != "number" || quantidade < 0) {
   res.send("Dados Invalidos")
   }else{
   res.send('{  \n' + ' "nome": "' + nome + '",\n' + '  "total": ' + resultado + ',\n' + ' }')
}}) 



app.listen(3000, () => {
   console.log('Servidor rodando em http://localhost:3000')
})