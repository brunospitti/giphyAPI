import React from 'react';

const SeeMore = props => {
        return (
            <button type="button"
                    onClick={props.seeMoreFunction}
                    className={props.buttonVisible? 'see-more show' : 'see-more hide'}>
                NOT ENOUGH!!!<span>Load 4 more</span>
            </button>
        )
}

export default SeeMore;