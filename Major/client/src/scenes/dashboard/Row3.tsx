/*import React from 'react'

type Props = {}

const Row3 = (props: Props) => {
  return (
    <div>Row3</div>
  )
}

export default Row3;*/

import DashboardBox from '../../assets/components/DashboardBox';
import React from 'react';

type Props = {}

const Row3 = (props: Props) => {
    

  return (
    <>
    <DashboardBox gridArea="g"></DashboardBox>
    <DashboardBox gridArea="h"></DashboardBox>
    <DashboardBox gridArea="i"></DashboardBox>
    </>
  )
}
export default Row3;