import React, { useState } from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'

export const AttackerModal = ({ show, handleClose, handleChange, submitHandler, name, data, isLoading }) => {
  return (
    show ?
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Attacker: {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Row>
              <Form.Group as={Col} controlId="xCoord">
                <Form.Label>X coordinate</Form.Label>
                <Form.Control type="text" name="xCoord" value={data.xCoord} required />
              </Form.Group>
              <Form.Group as={Col} controlId="yCoord">
                <Form.Label>Y Coordinate</Form.Label>
                <Form.Control type="text" name="yCoord" value={data.yCoord} required />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="troopSpeed">
                <Form.Label>Troop speed </Form.Label>
                <Form.Control as="select" value={data.troopSpeed} name="troopSpeed" onChange={handleChange} >
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="tournamentSquare">
                <Form.Label>Tournament Square </Form.Label>
                <Form.Control as="select" value={data.tournamentSquare} name="tournamentSquare" onChange={handleChange}>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="notBeforeTime">
                <Form.Label>Not before time</Form.Label>
                <Form.Control type="text" name="notBeforeTime" value={data.notBeforeTime} onChange={handleChange} />
              </Form.Group>
            </Form.Row>
            <hr />
            <Button variant="secondary" onClick={handleClose}>
              Close
                </Button>
            <Button variant="primary" type="submit"  disabled={isLoading}>
              Update
                </Button>
            {isLoading &&
              <>
                <span>Loading...</span><img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              </>
            }
          </Form>
        </Modal.Body>
      </Modal>
      : null
  )
}