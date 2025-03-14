'use client'

import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ReviewCard from './ReviewCard';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Review = () => {
    return (
        <div className='w-full mt-28'>
            <section id="section-review">
                <div className='bg-[#f8fff9] shadow-md rounded px-8 lg:mx-8 md:mx-8 pt-6 pb-8 mb-4'>
                    <h2 className=' font-bold md:leading-[3rem] lg:leading-[3.5rem] text-center'>
                        <span className='text-2xl md:text-2xl text-green-800'>EXPERIENCIAS</span>
                    </h2>
                    <p className='text-justify my-4 text-green-800'>
                        <span>
                        La adquisición del conocimiento, ya sea de manera intencionada o casual, se produce internamente a través de pensamientos o emociones, y externamente a través de interacciones materiales o físicas.
                        </span>
                    </p>
                    <p className='text-justify my-4 text-green-800'>
                        <span>
                            La experiencia humana a través de las artes marciales es un viaje de autodescubrimiento, disciplina y crecimiento. En la práctica intensionada y bien canalizada nos brindan 
                            herramientas valiosas para navegar por la vida, cultivar relaciones significativas y desarrollar un sentido de propósito y resiliencia. 
                        </span>
                    </p>
                    <p className='text-justify my-4 text-green-800'>
                        <span>
                            En última instancia, las artes marciales son una metáfora de la vida misma, donde cada golpe, caída y aparente victoria contribuye a la formación del carácter y la sabiduría.
                        </span>
                    </p>
                    <div className="mt-1 mx-auto">
                        <Carousel arrows={false} autoPlay={true} autoPlaySpeed={15000} infinite={true} responsive={responsive} showDots={true}>
                            <ReviewCard student_name="Ángela Poblete Riquelme" student_description='Grupo de Estudiantes Juveniles' parent_name="Angélica Riquelme Obando" parent_description='Mamá de Ángela' statement='Mi hija se siente increíblemente feliz y emocionada participando en la academia. Cade clase es una nueva aventura, donde aprende no sólo técnicas de defensa, sino también valores como la disciplina y la perseverancia. Se ha hecho amiga de sus compañeros y disfruta cada momento, superado desafíos y fortaleciendo su confianza. Verla crecer en este entorno es un verdadero orgullo.' image="review_1.jpeg" />
                            <ReviewCard student_name="Jorge Borgeaud Rueda" student_description='Grupo de Estudiantes Infantiles' parent_name="Catalina Rueda y Jorge Borgeaud" parent_description='Padres de Jorgito' statement='En la academia Kaizen depositamos nuestra confianza para que nuestro hijo realice una disciplina, nos hemos sentido súper apoyados por el gran crecimiento personal de nuestro hijo y su progreso en técnica y avance en el karate, la academia nos demostró que no es necesario tener conocimiento para ingresar, solo tener la disposición de aprender, ser esforzado, perseverante y disciplinado, el profesor con su disciplina y empatía a logrado encantarnos como familia por su gran trabajo en la academia. La academia es una gran familia.' image="review_2.jpeg" />
                            <ReviewCard student_name="Rafael Legue y Lucas Legue" student_description=' Grupo de Estudiantes Niños e Infantiles' parent_name="Natalie Mieres" parent_description='Mamá de Rafael y Lucas' statement='La academia Kaizen es un lugar excepcional para el desarrollo físico y emocional de los niños. Desde el primer día, se siente un ambiente acogedor donde se promueven valores como el respeto, la disciplina y la perseverancia. No solo transmite conocimientos técnicos, sino que también trata a los estudiantes con cercanía y cariño, logrando que se sientan motivados y seguros en cada entrenamiento. La academia no solo enseña karate, sino que también contribuye a la formación de personas con principios sólidos. Como madre, me siento profundamente agradecida por la formación que están recibiendo mis hijos, ya que cada día los veo crecer con más confianza, responsabilidad y respeto.' image="review_3.jpeg" />
                        </Carousel>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Review