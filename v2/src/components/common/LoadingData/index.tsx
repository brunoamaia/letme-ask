import { LoadingStyles } from './styles'

export function LoadingData() {
  return (
    <LoadingStyles>
      <div className="container">
        <h1>Buscando informações...</h1>

        <div className="circular-progress">
          <div className="circular-progress-circle">
            <div className="segment" />
          </div>
          <div className="circular-progress-background" />
        </div>
      </div>
    </LoadingStyles>
  )
}