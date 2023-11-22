import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer>
<figure class="text-center">
<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

</blockquote>
<figcaption class="blockquote-footer">
  Someone famous in <cite title="Source Title">Source Title</cite>
</figcaption>
</figure>
      <Container>
        <Row>
          <Col className='text-center py-3'>
          Copyright
          </Col>
          </Row> 
        </Container>

    </footer>
  )
}

export default Footer



