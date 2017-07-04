import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "react-select/dist/react-select.css";
import I18n from "i18n-js";
import "./SelectEntities.css";

export default class SelectEntities extends React.PureComponent {

    renderOption = option => {
        return (
            <span className="select-option">
                <span className="select-label">
                    {`${option.label} - ${option.value}`}
                </span>
            </span>
        );
    };

    options = (whiteListing, allowedEntities) => whiteListing
        .map(entry => {
            const metaDataFields = entry.data.metaDataFields;
            const value = entry.data.entityid;
            return {value: value, label: metaDataFields["name:en"] || metaDataFields["name:nl"] || value};
        })
        .filter(entry => allowedEntities.indexOf(entry.value) === -1);

    render() {
        const {onChange, whiteListing, allowedEntities} = this.props;
        return <Select className="select-state"
                       onChange={option => onChange(option.value)}
                       optionRenderer={this.renderOption}
                       options={this.options(whiteListing, allowedEntities.map(entity => entity.name))}
                       value={null}
                       searchable={true}
                       valueRenderer={this.renderOption}/>;
    }


}

SelectEntities.propTypes = {
    onChange: PropTypes.func.isRequired,
    whiteListing: PropTypes.array.isRequired,
    allowedEntities: PropTypes.array.isRequired
};

