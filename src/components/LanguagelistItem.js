import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

const LanguagelistItem = ({news, l})=> {
  return (
    <div>
      <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
        <RadioButton
          onClick={news}
          value="light"
          label={l}
          style={styles.radioButton}
        />
      </RadioButtonGroup>

    </div>
  )
}

export default LanguagelistItem
