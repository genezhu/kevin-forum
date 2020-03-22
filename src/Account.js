import React, { Component } from 'react'
import Navigation from './Navigation'
import Header from './Header'

class Account extends Component {
	render() {
		return (
            <>
                <Navigation></Navigation>
                <div class="container">
                <div class="row justify-content-center">
      <div class="col">
          <div class="jumbotron rounded">
            <h1 class="display-4">Manage your account</h1>
          </div>
        <div class="row">
          <div class="col-md-4">
        <div class="list-group" id="account-options" role="tablist">
          <a class="list-group-item list-group-item-action active" data-toggle="list" href="#change-password" role="tab">Change your password</a>
          <a class="list-group-item list-group-item-action" data-toggle="list" href="#delete-account" role="tab">Delete your account</a>
        </div>
          </div>
          <div class="col-md-8">
        <div class="tab-content">

          <div class="tab-pane active" id="change-password" role="tabpanel">
            <h2>Change your password</h2>

            <div class="form-group">
                <label for="current-password">Current password:</label>
                <input type="password" class="form-control" id="current-password" required/>
            </div>

            <div class="form-group">
                <label for="new-password">New password:</label>
                <input type="password" class="form-control" id="new-password" required/>
            </div>

            <div class="form-group">
                <label for="confirm-password">Confirm new password:</label>
                <input type="password" class="form-control" id="confirm-password" required/>
            </div>
          </div>

          <div class="tab-pane" id="delete-account" role="tabpanel">
            <div class="form-group">
                <label for="verify-password">Current password:</label>
                <input type="password" class="form-control" id="verify-password" required/>
            </div>
            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#confirm-delete-account">Delete my account</button>

            <div class="modal fade" id="confirm-delete-account" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Permanently delete your account?</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    This cannot be undone. Are you really sure?
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">No, take me back</button>
                    <button type="button" class="btn btn-danger">I understand, delete my account</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
        </div>
      </div>
    </div>
                </div>

                </>

		);
	}
}

export default Account