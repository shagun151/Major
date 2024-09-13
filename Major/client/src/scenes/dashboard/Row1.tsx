/*import React from 'react';
//import DashboardBox from "../components/DashboardBox";//
import DashboardBox from '../../assets/components/DashboardBox';
//import { useGetKpisQuery } from "@/state/api";
import { useGetKpisQuery} from '../../state/api'

type Props = {}

const Row1 = (props: Props) => {
    const {data} = useGetKpisQuery();

  return (
    <>
    <DashboardBox gridArea ="a"></DashboardBox></>
  )
}

export default Row1;*/

import DashboardBox from '../../assets/components/DashboardBox';
import React from 'react';
import { useGetKpisQuery} from '../../state/api'

type Props = {};

const Row1 = (props: Props) => {
    
    

  return (
    <>
    <DashboardBox gridArea="a"></DashboardBox>
    <DashboardBox gridArea="b"></DashboardBox>
    <DashboardBox gridArea="c"></DashboardBox>
    </>
  );
};
export default Row1;