import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'backgroundColor': '#eff1f4'
  },
  '#wrapper': {
    'width': [{ 'unit': 'px', 'value': 800 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  '#left': {
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'float': 'left',
    'backgroundColor': '#c7e7f9'
  },
  '#right': {
    'width': [{ 'unit': '%H', 'value': 0.7 }],
    'float': 'right',
    'backgroundColor': '#c5f7f2'
  },
  '#chatForm': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  '#left': {
    'minHeight': [{ 'unit': 'px', 'value': 300 }]
  },
  '#right': {
    'minHeight': [{ 'unit': 'px', 'value': 300 }]
  },
  '#boxTitle': {
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'black' }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'textAlign': 'center',
    'fontWeight': 'bold'
  },
  '#boxContent': {
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'black' }],
    'borderTop': [{ 'unit': 'string', 'value': 'none' }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'textAlign': 'center'
  },
  '#sayHi': {
    'textAlign': 'right'
  },
  '#listMessage': {
    'height': [{ 'unit': 'px', 'value': 200 }],
    'backgroundColor': '#c5f7da',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  }
});
