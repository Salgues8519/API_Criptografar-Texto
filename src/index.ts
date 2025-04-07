import 'dotenv/config'
import  express  from 'express'
import routes from './routes'
import path from 'path'

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(routes)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(process.env.PORT, () => {
    console.log("Server Started");
    
})

export default app;