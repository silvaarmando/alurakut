import MainGrid from "../src/components/MainGrid";
import Box from '../src/components/Box';
import {
  AlurakutMenu,
  OrkutNostalgicIconSet
} from '../src/lib/AlurakutCommons';
import {
  ProfileRelationsBoxWrapper
} from "../src/components/ProfileRelations";

function ProfileSideBar(props) {
  console.log(props)

  return (
    <Box>
      <img
        src={`https://github.com/${props.githubUser}.png`}
        style={
          { borderRadius: "8px" }
        }
      />
    </Box>
  );
}
export default function Home() {
  const userAlt = 'franciscoarmando63'
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
              Bem-vindo
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={
            { gridArea: "profileRelationsArea" }
          }
        >
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
                      <li>
                        <a
                          href={`/users/${currentItem}`}
                          key={currentItem}
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
