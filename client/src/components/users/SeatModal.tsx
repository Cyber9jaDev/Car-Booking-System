import '../../sass/tickets.scss';
const SeatModal = () => {

  const createArray = (): number[] => {
    const elements: number[] = [];
    for (let index = 1; index <= 30; index++) {
      elements.push(index);
    }
    return elements;
  }


  return (
    <section id="seat__modal">
      <h3>Select Seat</h3>

      <div className='test'>
        {
          createArray().map(number => {
            return (
              <div className='test__wrapper'>
                <div className="test1">
                  <span>{number}</span>
                </div>
              </div>
              )
          }) 
        }
      </div>
    </section>
  )
}

export default SeatModal