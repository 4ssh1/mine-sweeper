import  ClosedCell from "./components/header/grid/ClosedCell"
import EmptyCell from "./components/header/grid/EmptyCell"
import Info from "./components/header/Info"

function App() {

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div>
          <Info />
          <ClosedCell />
          <EmptyCell />
        </div>
      </div>
    </>
  )
}

export default App




