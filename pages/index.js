import
  React,
  {
    useState
} from 'react';

import MainGrid from "../src/components/MainGrid";
import Box from '../src/components/Box';
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet
} from '../src/lib/AlurakutCommons';
import {
  ProfileRelationsBoxWrapper
} from "../src/components/ProfileRelations";

function ProfileSideBar(props) {
  return (
    <Box
      as="aside"
    >
      <img
        src={`https://github.com/${props.githubUser}.png`}
        style={
          { borderRadius: "8px" }
        }
      />
      <hr />

      <p>
        <a
          className="boxLink"
          href={`https://github.com/${props.githubUser}`}
        >
          @{props.githubUser}
        </a>
      </p>

      <hr />
      
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}
export default function Home() {
  const userAlt = 'franciscoarmando63';
  const [
    communitys,
    setCommunitys
  ] = useState(
    [{
      id: 23501384941414,
      title: 'I hate waking up early',
      image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
    }]
  )
  // const community = ['Alurakut'];
  const favoritePeoples = [
    'franciscoarmando63',
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'maykbrito'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div
          className="profileArea"
          style={
            { gridArea: "profileArea" }
          }
        >
          <ProfileSideBar
            githubUser={userAlt}
          />
        </div>
        <div
          className="welcomeArea"
          style={
            { gridArea: "welcomeArea" }
          }
        >
          <Box>
            <h1
              className="title"
            >
              Bem-vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2
              className="subTitle"
            >
              O que você deseja fazer?
            </h2>
            <form onSubmit={
              function handleCommunityCreate(e) {
                e.preventDefault()
                const dataForm = new FormData(e.target);

                console.log('Campo: ', dataForm.get('id'));
                console.log('Campo: ', dataForm.get('title'));
                console.log('Campo: ', dataForm.get('image'));

                const community = {
                  id: new Date().toISOString(),
                  title: dataForm.get('title'),
                  image: dataForm.get('image'),
                }

                // community.push('Alura Stars');
                const communitysAtual = [
                  ...communitys,
                  community
                ]
                setCommunitys(communitysAtual)
              }
            }>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                  type=""
                />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={
            { gridArea: "profileRelationsArea" }
          }
        >
          <ProfileRelationsBoxWrapper>
            <ul>
              {
                communitys.map(
                  (currentItem) => {
                    return (
                      <li
                        key={currentItem.id}
                      >
                        <a
                          href={`/users/${currentItem.title}`}
                        >
                          <img
                            src={currentItem.image}
                          />
                          <span>
                            {currentItem.title}
                          </span>
                        </a>
                      </li>
                    );
                })
              }
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2
              className="smallTitle"
            >
              Pessoas da Comunidade
              (
                { favoritePeoples.length }
              )
            </h2>
            
            <ul>
              {
                favoritePeoples.map(
                  (currentItem) => {
                    return (
                      <li
                        key={currentItem}
                      >
                        <a
                          href={`/users/${currentItem}`}
                        >
                          <img
                            src={`https://github.com/${currentItem}.png`}
                          />
                          <span>
                            {currentItem}
                          </span>
                        </a>
                      </li>
                    );
                })
              }
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
