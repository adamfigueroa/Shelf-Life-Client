import React, { Component } from 'react';
import EditItemSidebar from "../EditItemSidebar/EditItemSidebar"
import EditItemForm from "../EditItemForm/EditItemForm"

class EditItemPage extends Component {

    render() {
        return (
            <React.Fragment>
                <EditItemSidebar />
                <EditItemForm />
            </React.Fragment>
        )
    }
}

export default EditItemPage