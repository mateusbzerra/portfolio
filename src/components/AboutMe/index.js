import React from 'react';

import {
  Container,
  Content,
  Wrapper,
  Card,
  CardContent,
  CardList,
} from './styles';
import CardComponent from '../Card';

export default function AboutMe() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Card>
            <CardContent>
              <h1>Sobre Mim</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                neque optio odio? Sint corrupti sed, pariatur est inventore
                alias culpa accusamus nostrum temporibus aut. Asperiores
                deleniti molestiae ducimus, ad consequatur beatae corrupti
                accusamus dolores maxime, quos, sequi amet laborum quisquam
                possimus animi et omnis tempore! Officia modi quibusdam natus
                qui odit cum animi, aliquam deserunt fuga tempore? Error, itaque
                impedit? Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Eius, autem! Impedit placeat veniam deserunt id reiciendis
                recusandae saepe, est eaque quisquam tempora esse, voluptate
                sequi at odio iste labore ullam. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Vel tempore similique iste
                assumenda praesentium ex quas explicabo totam temporibus id
                delectus aperiam eos, sunt iusto optio? Iusto debitis quaerat
                vel.
              </p>
            </CardContent>
          </Card>
        </Content>
        <img src='/images/profile.png' alt='profile-image' />
      </Wrapper>
      <CardList>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
      </CardList>
    </Container>
  );
}
