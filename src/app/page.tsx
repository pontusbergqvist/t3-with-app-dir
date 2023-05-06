'use client'

import { type NextPage } from "next";
import { MyComponent } from './myComponent';

import { api } from "~/utils/api";

const Home: NextPage = () => {

  return (
    <MyComponent />
  );
};

export default Home;
