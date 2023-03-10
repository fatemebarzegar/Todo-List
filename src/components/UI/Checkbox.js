import * as React from 'react';
// import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ColorCheckboxes({checked, onChange}) {
  return (
    <div>
      <Checkbox {...label} checked={checked} onChange={onChange} color="success" />
      {/* <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      /> */}
    </div>
  );
}