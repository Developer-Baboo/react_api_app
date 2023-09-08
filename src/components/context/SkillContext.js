import { createContext, useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://reset-api.test/api/v1";

const SkillContext = createContext();

export const SkillProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({ 
    name: "",
    slug: ""
  });
  
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const getSkills = async () => {
    try {
      const response = await axios.get("skills");
      setSkills(response.data.data);
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  };

  const getSkill = async (id) => {
    const response = await axios.get("skills/" + id);
    setSkill(response.data.data);
  }

  return (
    <SkillContext.Provider value={{ skill, skills, getSkill, getSkills, onChange, formValues }}>
      {children}
    </SkillContext.Provider>
  );
};

export default SkillContext;