const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000

let Etapas= [
    {id: "1", periodo:"PRIMER TRIMESTRE", 
	semana: [
	{id:"11", semana:"Semana 1", descripción:"Se ha producido la fecundación y la implantación en el endometrio. Por regla general, esta semana pasa desapercibida para la madre, puesto que los cambios que se han empezado a producir a nivel hormonal, todavía no afectan al humor o al estado físico de la madre.",},
	{id:"12", semana:"Semana 2", descripción:"El embrión comienza a desarrollarse y se define su sexo. En principio, los síntomas no se manifiestan todavía, si bien hay algunas mujeres que experimentan cambios de humor, sensibilidad en los pechos, náuseas  o fatiga.",},
	{id:"13", semana:"Semana 3", descripción:"Es en este período cuando se comienza a producir la famosa hormona del embarazo, la que provoca que los test de embarazo caseros den positivo. Por ello, muchas mujeres se enteran de que esperan un hijo a partir de la tercera semana. La mayoría de las futuras madres siguen sin experimentar síntomas de manera clara.",},
	{id:"14", semana:"Semana 4", descripción:"Los sistemas y principales órganos del bebé comienzan a desarrollarse. Por ello es importante que, si sospechas o sabes que estás embarazada, interrumpas inmediatamente el consumo de tabaco, alcohol u otras sustancias nocivas. Por su parte, los síntomas comienzan a manifestarse: variaciones en el estado de ánimo, cansancio, náuseas matinales, dolor y aumento del volumen de los senos o desarrollo del sentido del olfato son los más comunes.",},
	{id:"15", semana:"Semana 5", descripción:"El embrión sigue desarrollándose con el aspecto de un renacuajo. Los síntomas descritos anteriormente siguen manifestándose en menor o mayor medida, dependiendo de la mujer. Además, se puede experimentar una necesidad frecuente de orinar debido al aumento del tamaño del útero.",},
	{id:"16", semana:"Semana 6", descripción:"El bebé ya ha alcanzado el tamaño de un guisante y, a partir de esta semana, empezará a desarrollar las extremidades. Pueden aparecer nuevos síntomas relacionados con el estómago, como la acidez, o el estreñimiento.",},
	{id:"17", semana:"Semana 7", descripción:"Empiezan los famosos antojos y los síntomas más comunes pueden agudizarse. Mientras tanto, la cara del bebé va tomando forma y sus órganos siguen desarrollándose, a la vez que se va perdiendo la forma inicial de renacuajo.",},
	{id:"18", semana:"Semana 8", descripción:"El embrión pasa a ser un feto. Es muy importante que la madre siga hábitos de nutrición y salud que sean beneficiosos para el bebé, ya que a partir de la octava semana pasa a alimentarse exclusivamente a través del cordón umbilical. El útero, para entonces, habrá crecido considerablemente y, aunque no sea visible todavía en forma de tripita, puede sentirse algún dolor.",},
	{id:"19", semana:"Semana 9", descripción:"El sistema digestivo del bebé va desarrollándose progresivamente y el feto va preparándose, una vez que los principales sistemas están formados, para crecer en tamaño. La madre puede seguir sintiendo los síntomas de las anteriores semanas, ya que es normal que se mantengan durante el primer trimestre.",},
	{id:"111", semana:"Semana 10", descripción:"La barriga empezará a aumentar de tamaño debido a que el feto hace lo propio y muy rápidamente. En estos momentos, puede que los síntomas vayan remitiendo aunque los cambios en el estado de ánimo, debido a las alteraciones hormonales, podrían mantenerse.",}, 
	{id:"121", semana:"Semana 11", descripción:"El feto ya realiza ciertas actividades por sí mismo, como orinar o tragar. Puede incluso mover sus extremidades. La llegada del segundo trimestre anuncia un período mucho más tranquilo para la madre, aunque debe seguir cuidando la dieta y la salud. Es recomendable la actividad física, pero de forma moderada, como caminar o practicar yoga.",}, 
	{id:"131", semana:"Semana 12", descripción:"Finaliza el primer trimestre y con él, los peores síntomas del embarazo. La barriga ya empieza a notarse y el bebé sigue creciendo a buen ritmo. Su rostro cada vez es más definido y los órganos van perfeccionándose.",}, 
	]
	},  
	{id: "2", periodo:"SEGUNDO TRIMESTRE", 
	semana: [
	{id:"21", semanas:"Semanas 13 - 16", descripción:"La etapa más delicada del embarazo ya ha pasado, el riesgo de aborto involuntario ha disminuido considerablemente y los síntomas también. Eso sí, la barriga crece y crece, por lo que es momento de comprar ropa premamá que sea cómoda. Hay que tener precaución con lo que se come, ya que es normal ingerir comida de más. Los pechos siguen aumentando y se preparan para la lactancia. El bebé, por su parte, empieza a oír gracias a la consolidación de los huesos auditivos. Durante este período, se produce uno de los momentos más emocionantes del embarazo ya que toca conocer el sexo del bebé.",},
	{id:"22", semanas:"Semanas 17 - 20", descripción:"Algunas mujeres ya notan los movimientos del bebé. Su cerebro ya ha desarrollado consistentemente el área que controla los distintos sentidos, que se agudizan. La madre puede sufrir algo de estreñimiento y, por ello, se debe aumentar la ingesta de fibras y el consumo de agua. Otros síntomas que suelen aparecer en estas semanas son: hinchazón de las piernas, varices, sequedad en la piel,  fatiga, etc.",},
	{id:"23", semanas:"Semanas 21 - 24", descripción:"El movimiento del bebé será cada vez más evidente, sobre todo por las noches. Es momento de empezar a hablarle para que conozca la voz de la madre. Su sentido del tacto ya se ha desarrollado. La barriga sigue creciendo y esto puede provocar algún problema en la piel, por lo que se recomienda aplicar crema hidratante para prevenir también la aparición de estrías.",},
	{id:"24", semanas:"Semanas 25 - 26", descripción:"El niño combina períodos de sueño y vigilia, así que habrá momentos en los que no se noten sus movimientos. La presión sobre la pelvis de la madre cada vez es mayor por el aumento del tamaño del útero y las ganas de ir a orinar con frecuencia aumentarán. Otra de las consecuencias es el dolor de espalda y, por eso, se recomienda tanto la realización de actividades como el yoga, que ayudarán a aliviar estos síntomas.",},
	]
	},  
	{id: "3", periodo:"TERCER TRIMESTRE", 
	semana: [
	{id:"31", semanas:"Semanas 27 - 32", descripción:"Lo peor del último trimestre se resume en el cansancio, la incomodidad y los cambios de humor. La comunicación con la madre llega a un estadio muy especial, ya que el feto es capaz de sentir incluso hasta ciertos sentimientos como momentos de estrés. Por eso se recomienda permanecer tranquila en medida de lo posible. Los pies se seguirán hinchando (descansar con los pies en alto alivia esta molestia) y empezarán a aparecer las estrías, que se pueden prevenir con la aplicación de cremas adecuadas. Por otro lado, puedes sentir contracciones que, si no son muy seguidas, no presentan importancia. Has entrado en la fase final del embarazo.",},
	{id:"32", semanas:"Semanas 33 - 38", descripción:"El feto comienza a colocarse con su cabeza boca abajo, en la pelvis, síntoma de que el parto está cerca. Su gran tamaño provoca que al moverse, un pie pueda incluso sobresalir de la barriga. También se produce una presión sobre los órganos de la madre, razón por la cual le costará respirar y se llenará rápidamente cuando coma. La tranquilidad ha de ser el estado de ánimo dominante. A partir de la semana 37, el bebé ya está en condiciones de nacer y el parto puede adelantarse, así que hay que estar atenta a los síntomas como las contracciones. Si son muy seguidas, acudir al ginecólogo.",},
	{id:"33", semanas:"Semanas 39 - 40", descripción:"Ha llegado el momento. El bebé ya puede llegar a pesar los 3 kilos, por lo que será muy incómodo para la madre caminar, dormir o incluso sentarse por el tamaño de la tripa. ¡El embarazo ha llegado a su fin y ya es hora de disfrutar del nuevo miembro de la familia!",},
	]
	},  
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.status(200).send
	("Bienvenid@ !!! Aqui encontraras información acerca de las etapas y cuidados del embarazo. Pega el siguiente link https://alexbermudezapirestuser.herokuapp.com/etapas en tu navegador")
})

app.get('/Etapas', (req, res) => {
    res.send(Etapas)
})

http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})