import React from 'react';
import styled from '@emotion/styled';
import dummy from '../../../dummy/item';
import { ItemBox } from '../../../components/index';
import { MoreBox } from './index';

export const RecommandItemArticle = ({ title }) => {
  const checkTitle = { title };

  //mainPage에 최대 4개까지 출력할 수 있게 임시로 만든 기능
  const maxItem = dummy.filter((data) => {
    return data.id <= 4;
  });

  return (
    <Article>
      <Title>{title}</Title>
      <ItemListBox>
        {checkTitle.title == 'Poplur Items' && <MoreBox />}
        <ItemListNav>
          <NextButton src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjQwLjgyMyAyNDAuODIzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNDAuODIzIDI0MC44MjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGlkPSJDaGV2cm9uX1JpZ2h0XzFfIiBkPSJNMTgzLjE4OSwxMTEuODE2TDc0Ljg5MiwzLjU1NWMtNC43NTItNC43NC0xMi40NTEtNC43NC0xNy4yMTUsMGMtNC43NTIsNC43NC00Ljc1MiwxMi40MzksMCwxNy4xNzkNCgkJbDk5LjcwNyw5OS42NzFsLTk5LjY5NSw5OS42NzFjLTQuNzUyLDQuNzQtNC43NTIsMTIuNDM5LDAsMTcuMTkxYzQuNzUyLDQuNzQsMTIuNDYzLDQuNzQsMTcuMjE1LDBsMTA4LjI5Ny0xMDguMjYxDQoJCUMxODcuODgxLDEyNC4zMTUsMTg3Ljg4MSwxMTYuNDk1LDE4My4xODksMTExLjgxNnoiLz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
          <ItemList>
            {maxItem.map((data) => (
              <ItemBox
                key={data.id}
                name={data.name}
                price={data.price}></ItemBox>
            ))}
          </ItemList>

          <NextButton src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjQwLjgyMyAyNDAuODIzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNDAuODIzIDI0MC44MjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGlkPSJDaGV2cm9uX1JpZ2h0XzFfIiBkPSJNMTgzLjE4OSwxMTEuODE2TDc0Ljg5MiwzLjU1NWMtNC43NTItNC43NC0xMi40NTEtNC43NC0xNy4yMTUsMGMtNC43NTIsNC43NC00Ljc1MiwxMi40MzksMCwxNy4xNzkNCgkJbDk5LjcwNyw5OS42NzFsLTk5LjY5NSw5OS42NzFjLTQuNzUyLDQuNzQtNC43NTIsMTIuNDM5LDAsMTcuMTkxYzQuNzUyLDQuNzQsMTIuNDYzLDQuNzQsMTcuMjE1LDBsMTA4LjI5Ny0xMDguMjYxDQoJCUMxODcuODgxLDEyNC4zMTUsMTg3Ljg4MSwxMTYuNDk1LDE4My4xODksMTExLjgxNnoiLz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
        </ItemListNav>
      </ItemListBox>
    </Article>
  );
};

const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 70px auto;
`;

const Title = styled.p`
  margin: 0;
  padding: 20px 0;
  font-size: 40px;
  text-align: center;
  line-height: 180%;
`;
const ItemListBox = styled.div`
  position: relative;
`;
const ItemListNav = styled.div`
  display: flex;
  margin: 0;

  justify-content: center;
  align-items: center;
`;

const ItemList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const NextButton = styled.img`
  width: 30px;
  height: 30px;
  &:nth-of-type(odd) {
    transform: rotate(180deg);
  }
`;
