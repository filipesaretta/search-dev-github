import iconSun from '../../assets/sun.svg'


export function Header() {
  console.log('first');

  return (
    <div>
      <h1>Search a dev</h1>
      <button>Light
        <img src={iconSun} alt="Icon for change theme from light to dark or dark to light" />
      </button>
    </div>
  )

}