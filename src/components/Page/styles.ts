import styled from 'styled-components';
import CahnbuyaCity from '../../assets/cahnbuyaCity.jpg';
import DraukenCity from '../../assets/draukenCity.jpg'
import DurnnstenCity from '../../assets/durnnstenCity.jpg'
import DuurhnowCity from '../../assets/duurhnowCity.jpg'
import LaulfthCity from '../../assets/laulfthCity.jpg'
import ZinvallCity from '../../assets/zinvallCity.jpg'

export const Container = styled.div`
  .colored:nth-child(1) {
    background: url(${CahnbuyaCity});
  }
  .colored:nth-child(2) {
    background: url(${DraukenCity});
  }
  .colored:nth-child(3) {
    background: url(${DurnnstenCity});
  }
  .colored:nth-child(4) {
    background: url(${DuurhnowCity});
  }
  .colored:nth-child(5) {
    background: url(${LaulfthCity});
  }
  .colored:nth-child(6) {
    background: url(${ZinvallCity});
  }
`
export const Spacer = styled.div `
  height: 15vh;
  background: #dfffd9;
`
