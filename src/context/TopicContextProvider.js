import axios from "axios";
import React, { createContext, useReducer, useState } from "react";

export const topicsContext = createContext();

const API = "http://localhost:8001/contacts";

const INIT_STATE = {
  topics: [],
  topicDetails: {},
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TOPICS":
      return { ...prevState, topics: action.payload };
    case "GET_TOPIC_DETAILS":
      return { ...prevState, topicDetails: action.payload };
    default:
      return prevState;
  }
};

let page = 1;
let totalPage = [];
let limit = 3;
const TopicContextProvider = ({ children }) => {
  const [searchVal, setSearchVal] = useState("");

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addTopic = (topic) => {
    axios.post(API, topic);
  };

  const getTopics = async () => {
    totalPageFunc();
    const { data } = await axios.get(
      `${API}?_page=${page}&_limit=${limit}&q=${searchVal}`
    );
    let action = {
      type: "GET_TOPICS",
      payload: data,
    };
    dispatch(action);
  };

  const getTopicDetails = async (id) => {
    let { data } = await axios(`${API}/${id}`);
    let action = {
      type: "GET_TOPIC_DETAILS",
      payload: data,
    };
    dispatch(action);
  };

  const deleteTopic = async (id) => {
    await axios.delete(`${API}/${id}`);
  };

  const editTopicPatch = async (id, editedTopic) => {
    await axios.patch(`${API}/${id}`, editedTopic);
  };

  const totalPageFunc = async () => {
    let { data } = await axios(API);
    totalPage = Math.ceil(data.length / limit);
  };

  const prevPage = () => {
    if (page <= 1) return;
    page--;
    getTopics();
  };

  const nextPage = () => {
    if (totalPage <= 1) return;
    page++;
    getTopics();
  };

  let cloud = {
    addTopic,
    getTopics,
    getTopicDetails,
    deleteTopic,
    editTopicPatch,
    prevPage,
    nextPage,
    setSearchVal,
    searchVal,
    topicsArr: state.topics,
    topicDetailsObj: state.topicDetails,
  };

  return (
    <topicsContext.Provider value={cloud}>{children}</topicsContext.Provider>
  );
};

export default TopicContextProvider;
