import React,{createContext, useContext, useState} from 'react'

const Context = createContext()

const ContextProvider = ({children}) => {

    const products =[

        {
            nombre : 'Monitor gamer Samsung F24T35 led 24" azul y gris oscuro 100V/240V',
            tag : 'Monitor',
            precio : 79000,
            stock : 10,
            id : 1,
            descripcion : 
            <ul>
                <li>Pantalla led de 24".</li>
                <li>Tiene una resolución de 1920px-1080px.</li>
                <li>Relación de aspecto de 16:9.</li>
                <li>Panel IPS.</li>
                <li>Su brillo es de 250cd/m².</li>
                <li>Tipos de conexión: D-Sub, HDMI 1.4.</li>
                <li>Es reclinable.</li>
                <li>Comodidad visual en todo momento.</li>
            </ul>,
            imagen : "https://http2.mlstatic.com/D_NQ_NP_2X_735145-MLA48131216536_112021-F.webp",
            fuente : "https://www.mercadolibre.com.ar/monitor-gamer-samsung-f24t35-led-24-azul-y-gris-oscuro-100v240v/p/MLA17360590?pdp_filters=category:MLA14407#searchVariation=MLA17360590&position=4&search_layout=grid&type=product&tracking_id=ea15fa73-8e2a-4dbe-a5da-a7ef79b1d3d7",
        },
        {
            nombre: 'Monitor gamer Samsung F22T35 led 22" dark blue gray 100V/240V',
            tag : 'Monitor',
            precio: 70000,
            stock : 10,
            id:2,
            descripcion: 
            <ul>
                <li>Pantalla led de 22".</li>
                <li>Tiene una resolución de 1920px-1080px.</li>
                <li>Relación de aspecto de 16:9.</li>
                <li>Panel IPS.</li>
                <li>Su brillo es de 250cd/m².</li>
                <li>Tipos de conexión: HDMI 1.4, D-Sub.</li>
                <li>Es reclinable.</li>
                <li>Comodidad visual en todo momento.</li>
            </ul>,
            imagen : "https://http2.mlstatic.com/D_NQ_NP_980340-MLU69492858497_052023-O.webp",
            fuente : "https://www.mercadolibre.com.ar/monitor-gamer-samsung-f22t35-led-22-dark-blue-gray-100v240v/p/MLA17395574?pdp_filters=category:MLA14407#searchVariation=MLA17395574&position=5&search_layout=grid&type=product&tracking_id=ea15fa73-8e2a-4dbe-a5da-a7ef79b1d3d7",
        },
        {
            nombre: 'Monitor gamer Philips V 221V8 LCD 21.5" negro 100V/240V',
            tag : 'Monitor',
            precio: 45000,
            stock : 10,
            id:3,
            descripcion: 
            <ul>
                <li>Pantalla LCD de 21.5".</li>
                <li>Posee pantalla antirreflejo.</li>
                <li>Tiene una resolución de 1920px-1080px.</li>
                <li>Relación de aspecto de 16:9.</li>
                <li>Panel VA.</li>
                <li>Su brillo es de 200cd/m².</li>
                <li>Tipos de conexión: HDMI, Jack 3.5 mm, VGA/D-Sub.</li>
                <li>Es reclinable.</li>
                <li>Comodidad visual en todo momento.</li>
            </ul>,
            imagen : "https://http2.mlstatic.com/D_NQ_NP_686286-MLA48689496394_122021-O.webp",
            fuente : "https://www.mercadolibre.com.ar/monitor-gamer-philips-v-221v8-lcd-215-negro-100v240v/p/MLA18606777?pdp_filters=category:MLA14407#searchVariation=MLA18606777&position=6&search_layout=grid&type=product&tracking_id=ea15fa73-8e2a-4dbe-a5da-a7ef79b1d3d7",
        },
        {
            nombre: 'Monitor Samsung Odyssey G4 S25BG40 25 " - Negro - 100V/240V',
            tag : 'Monitor',
            precio: 157000,
            stock : 10,
            id:4,
            descripcion: 
            <ul>
                <li>Pantalla Full HD de 25" con resolución 1920x1080 para imágenes nítidas y colores vibrantes</li>
                <li>Posee pantalla antirreflejo.</li>
                <li>Frecuencia de actualización de 240 Hz y tiempo de respuesta GTG de 1 ms para fluidez en juegos</li>
                <li>Tecnologías FreeSync Premium, GSync y AdaptiveSync para experiencia de juego sin interrupciones</li>
                <li>Diseño giratorio y reclinable con montaje VESA para ajustar ángulo de visión y optimizar espacio</li>
                <li>Su brillo es de 200cd/m².</li>
                <li>Reducción de luz azul para proteger tus ojos durante largas sesiones de juego</li>
                <li>Conexiones DisplayPort 1.2, 2 HDMI 2.0 y Jack 3.5 mm para conectar dispositivos fácilmente</li>
            </ul>,
            imagen : "https://http2.mlstatic.com/D_NQ_NP_926442-MLU69482628360_052023-O.webp",
            fuente : "https://www.mercadolibre.com.ar/samsung-odyssey-g4-s25bg40-25-negro-100v240v/p/MLA19821271?pdp_filters=category:MLA14407#searchVariation=MLA19821271&position=7&search_layout=grid&type=product&tracking_id=ea15fa73-8e2a-4dbe-a5da-a7ef79b1d3d7",
        },
        {
            nombre: 'Monitor Asus VA24E VA24EHE 23.8 " - Negro - 100V/240V',
            tag : 'Monitor',
            precio: 125000,
            stock : 10,
            id:5,
            descripcion: 
            <ul>
                <li>Pantalla Full HD de 23.8" para imágenes nítidas y colores vibrantes</li>
                <li>Tecnologías FreeSync y AdaptiveSync para una jugabilidad fluida</li>
                <li>Conexiones HDMI 1.4, DVID y VGA para mayor versatilidad</li>
                <li>Diseño reclinable y compatible con montaje VESA para ajuste personalizado</li>
                <li>Pantalla antirreflejo y ángulos de visión amplios para mayor comodidad</li>
            </ul>,
            imagen : "https://http2.mlstatic.com/D_NQ_NP_699498-MLA44770574696_022021-O.webp",
            fuente : "https://www.mercadolibre.com.ar/asus-va24e-va24ehe-238-negro-100v240v/p/MLA17006911?pdp_filters=category:MLA14407#searchVariation=MLA17006911&position=14&search_layout=grid&type=product&tracking_id=ea15fa73-8e2a-4dbe-a5da-a7ef79b1d3d7",
        },
        {
            nombre: 'Mouse De Juego Gamer Norcel N Series N271 8 Botones Rgb Negro',
            tag : 'Mouse',
            precio: 1300,
            stock : 10,
            id:6,
            descripcion: 
            <ul>
                <li>Utiliza cable.</li>
                <li>Con sensor óptico.</li>
                <li>Resolución de 6400dpi.</li>
            </ul>,
            imagen : "https://http2.mlstatic.com/D_NQ_NP_657608-MLA50986276555_082022-O.webp",
            fuente : "https://www.mercadolibre.com.ar/mouse-de-juego-gamer-norcel-n-series-n271-8-botones-rgb-negro/p/MLA19510741?pdp_filters=category:MLA1714#searchVariation=MLA19510741&position=4&search_layout=stack&type=product&tracking_id=8bb8b4a2-98ec-42cd-b8e2-c990761bcf43",
        },
        {
            nombre: 'Mouse Xinua M8 Gamer Recargable Luz Rgb 6 Botones Usb Pc',
            tag : 'Mouse',
            precio: 8000,
            stock : 10,
            id:7,
            descripcion: 
            <ul>
                <li>Es inalámbrico.</li>
                <li>Con sensor óptico.</li>
                <li>Incluye batería recargable.</li>
                <li>Resolución de 1600dpi.</li>
            </ul>,
            imagen : "https://http2.mlstatic.com/D_NQ_NP_855656-MLA50500481254_062022-O.webp",
            fuente : "https://www.mercadolibre.com.ar/mouse-xinua-m8-gamer-recargable-luz-rgb-6-botones-usb-pc/p/MLA19875692?pdp_filters=category:MLA1714#searchVariation=MLA19875692&position=5&search_layout=stack&type=product&tracking_id=8bb8b4a2-98ec-42cd-b8e2-c990761bcf43"
        },
        {
            nombre: 'Mouse De Juego Gamer Luz Rgb Retroiluminada Ergonomico',
            tag : 'Mouse',
            precio: 3200,
            stock : 10,
            id:8,
            descripcion: 
            <ul>
                <li>Utiliza cable.</li>
                <li>Con sensor óptico.</li>
                <li>Resolución de 2400dpi.</li>
            </ul>,
            imagen : "https://http2.mlstatic.com/D_NQ_NP_910752-MLA53290738694_012023-O.webp",
            fuente : "https://articulo.mercadolibre.com.ar/MLA-1310376499-mouse-de-juego-gamer-luz-rgb-retroiluminada-ergonomico-_JM#position=39&search_layout=stack&type=item&tracking_id=8bb8b4a2-98ec-42cd-b8e2-c990761bcf43"
        },
        {
            nombre: 'Mouse gamer de juego Razer DeathAdder Essential negro',
            tag : 'Mouse',
            precio: 23000,
            stock : 10,
            id:9,
            descripcion: 
            <ul>
                <li>Utiliza cable.</li>
                <li>Con sensor óptico.</li>
                <li>Con luces para mejorar la experiencia de uso.</li>
                <li>Resolución de 6400dpi.</li>
            </ul>,
            imagen : "https://http2.mlstatic.com/D_NQ_NP_674581-MLA41799362594_052020-O.webp",
            fuente : "https://www.mercadolibre.com.ar/mouse-gamer-de-juego-razer-deathadder-essential-negro/p/MLA6214305?pdp_filters=category:MLA1714#searchVariation=MLA6214305&position=7&search_layout=stack&type=product&tracking_id=8bb8b4a2-98ec-42cd-b8e2-c990761bcf43"
        },
        {
            nombre: 'Mouse Gamer Xtrike Me Gm-510 Backlit - Gaming Pc Notebook',
            tag : 'Mouse',
            precio: 2800,
            stock : 10,
            id:10,
            descripcion: 
            <ul>
                <li>Utiliza cable.</li>
                <li>Con sensor óptico.</li>
                <li>Resolución de 4800dpi.</li>
            </ul>,
            imagen : "https://http2.mlstatic.com/D_NQ_NP_787727-MLA69746360304_062023-O.webp",
            fuente : "https://articulo.mercadolibre.com.ar/MLA-1371797897-mouse-gamer-xtrike-me-gm-510-backlit-gaming-pc-notebook-_JM#position=42&search_layout=stack&type=item&tracking_id=8bb8b4a2-98ec-42cd-b8e2-c990761bcf43"
        },
    ]

    const getProductById = (id) => {
        return products.find(producto => producto.id === Number(id))
    }

    const getProductCartById = (id) => {
        return cart.find(producto => producto.id === Number(id))
    }

    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.some(producto => producto.id === Number(id))

    const addProductCart = (id, quantity) => { 
        if(isInCart(id)){
            setCart (cart.map(product => {
                if(product.id == id){
                    product.quantity = quantity
                }
                return product
            }))
        }else{
            setCart ([...cart, {...getProductById(id), quantity: quantity}])
        }
        
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(product => total += product.precio * product.quantity)
        return total
    };


  return (
    <Context.Provider value={{products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}}>
        {children}
    </Context.Provider>
  )
}

export const useCustomContext = () => useContext(Context)

export default ContextProvider