'use client'

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'

type BeforeAfterSliderProps = {
  before: string
  after: string
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ before, after }) => {
  return (
    <div className="rounded overflow-hidden shadow-md">
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={before} alt="Before" />}
        itemTwo={<ReactCompareSliderImage src={after} alt="After" />}
        position={50}
      />
    </div>
  )
}

export default BeforeAfterSlider
