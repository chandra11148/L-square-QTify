import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from "./Filters.module.css"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };



 function Filters({filters,selectedFilterIndex,setSelectedFilterIndex}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  return (
    <div>
      
        <Tabs value={selectedFilterIndex} 
            onChange={handleChange} 
            aria-label="basic tabs example"
            TabIndicatorProps={{
                style:{
                    backgroundColor:"var(--color-primary)"
                }
            }}>
                {filters.map((el,idx)=>(
                     <Tab className={styles.tab} label={el.label} {...a11yProps(idx)} />
                ))}
          
        </Tabs>
      {filters.map((el,idx)=>(
        <TabPanel value={el.label} index={idx} />
      ))}
    </div>
  );
}
export default Filters;