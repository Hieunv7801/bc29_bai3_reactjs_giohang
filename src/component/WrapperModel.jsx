import React, { Component } from 'react'

export default class WrapperModel extends Component {
    render() {
        return (
            <div>
                {/* Modal */}
                <div  className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" style={{maxWidth:"800px", width:"800px"}}>
                            <div className="modal-header bg-warning">
                                <h5 className="modal-title ">Chi tiết</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.props.children}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
