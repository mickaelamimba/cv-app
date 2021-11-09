import Profile from "../components/profile/profile";
import AboutMe from "../components/description/aboutMe";
import ContactInfo from "../components/description/contactInfo";
import Experience from "../components/experience/experience";
import Quality from "../components/description/quality";
import CardSkill from "../components/cardSkill/cardSkill";
import Dividers from "../components/dividers/dividers";
import {experience} from "../data/experience";
import {summary} from "../data/summary";
import {skill} from "../data/skill";
import {quality} from "../data/quality";
import {formation} from "../data/formation";
import CardFormation from "../components/cardFormation/cardFormation";




export default function Home({data,dataExperience,dataQuality,dataSkill,dataFormation }) {

  return (
    <div>
          <Profile>
              <AboutMe
                  title={data[0].title}
                  body={data[0].body}

              />
              <ContactInfo
                  address={data[1].address}
                  tel={data[1].tel}
                  email={data[1].email}
              />
              {dataQuality?.map((quality)=>(
                  <Quality key={quality.id} quality={quality }/>
              ))}


          </Profile>
        <div className='bg-bg-indigo-100 shadow-md rounded-lg py-2 '>
            <Experience data={dataExperience}/>
        </div>

        <Dividers title='COMPETENCES EN INFORMATIQUE'/>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-2">
            {dataSkill.map((data)=>{
              return <CardSkill key={data.id} skill={data}/>
            })

            }
        </div>
        <Dividers title='FORMATION'/>
        <nav className='sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-3'>

                {dataFormation?.map((data)=>(
                    <CardFormation key={data.id}{...data}/>
                ))

                }


        </nav>
    </div>
  )
}
export async function getStaticProps(){
    const data=  summary

    const dataExperience = experience
    const dataQuality = quality
    const dataFormation = formation

    const dataSkill =  skill
    return{
        props:{
            data,
            dataExperience,
            dataQuality,
            dataSkill,
            dataFormation

        }
    }
}