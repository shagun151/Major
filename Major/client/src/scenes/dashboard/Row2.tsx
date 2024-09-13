/*import React from 'react'
import DashboardBox from '../../assets/components/DashboardBox';

type Props = {}

const Row2 = (props: Props) => {
  return (
    <div>Row2</div>
  )
}

export default Row2;*/

import DashboardBox from '../../assets/components/DashboardBox';
import React from 'react';

type Props = {}

const Row2 = (props: Props) => {
    

  return (
    <>
    <DashboardBox gridArea="d"></DashboardBox>
    <DashboardBox gridArea="e"></DashboardBox>
    <DashboardBox gridArea="f"></DashboardBox>
    </>
  )
}
export default Row2;