import  ClosedCell from "./components/header/grid/ClosedCell"
import EmptyCell from "./components/header/grid/EmptyCell"
import Info from "./components/header/Info"
import { Bomb, BombFrame, Flag } from "./helpers/Board"

function App() {

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div>
          <Info />
          <ClosedCell>
            <Flag />
          </ClosedCell>
          <EmptyCell />
          <BombFrame >
            <Bomb />
          </BombFrame>
        </div>
      </div>
    </>
  )
}

export default App




