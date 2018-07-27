import React from 'react';

import { Button } from 'reactstrap';

const Butonne = props => <Button color={props.color}>{props.children}</Button>;

export default Butonne;
