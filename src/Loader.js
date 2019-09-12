import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';


class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <div className='loading'>
                <SyncLoader
                    sizeUnit={"px"}
                    size={40}
                    color={'#2788bc'}
                    loading={this.state.loading}
                />
            </div>
        )
    }
}

export default Loader;
