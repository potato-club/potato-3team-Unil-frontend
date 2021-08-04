import React from 'react';
import styled from '@emotion/styled';
import { customColor } from '../constants/index';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <HeaderSection>
        <Link to="/" style={styledLink}>
          <Title>Gentleman</Title>
        </Link>
        <HeaderNav>
          <HeaderNavItem>
            <Link to="/" style={styledLink}>
              HOME
            </Link>
          </HeaderNavItem>
          <HeaderNavItem>
            <Link to="/itemList" style={styledLink}>
              ITEM
            </Link>
            <DropDwonIcon src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMi4wMTEgNTEyLjAxMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAxMSA1MTIuMDExOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTUwNS43NTUsMTIzLjU5MmMtOC4zNDEtOC4zNDEtMjEuODI0LTguMzQxLTMwLjE2NSwwTDI1Ni4wMDUsMzQzLjE3NkwzNi40MjEsMTIzLjU5MmMtOC4zNDEtOC4zNDEtMjEuODI0LTguMzQxLTMwLjE2NSwwDQoJCQlzLTguMzQxLDIxLjgyNCwwLDMwLjE2NWwyMzQuNjY3LDIzNC42NjdjNC4xNiw0LjE2LDkuNjIxLDYuMjUxLDE1LjA4Myw2LjI1MWM1LjQ2MiwwLDEwLjkyMy0yLjA5MSwxNS4wODMtNi4yNTFsMjM0LjY2Ny0yMzQuNjY3DQoJCQlDNTE0LjA5NiwxNDUuNDE2LDUxNC4wOTYsMTMxLjkzMyw1MDUuNzU1LDEyMy41OTJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
          </HeaderNavItem>
          <HeaderNavItem>
            <Link to="/community" style={styledLink}>
              COMMUNITY
            </Link>
            <DropDwonIcon src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMi4wMTEgNTEyLjAxMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAxMSA1MTIuMDExOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTUwNS43NTUsMTIzLjU5MmMtOC4zNDEtOC4zNDEtMjEuODI0LTguMzQxLTMwLjE2NSwwTDI1Ni4wMDUsMzQzLjE3NkwzNi40MjEsMTIzLjU5MmMtOC4zNDEtOC4zNDEtMjEuODI0LTguMzQxLTMwLjE2NSwwDQoJCQlzLTguMzQxLDIxLjgyNCwwLDMwLjE2NWwyMzQuNjY3LDIzNC42NjdjNC4xNiw0LjE2LDkuNjIxLDYuMjUxLDE1LjA4Myw2LjI1MWM1LjQ2MiwwLDEwLjkyMy0yLjA5MSwxNS4wODMtNi4yNTFsMjM0LjY2Ny0yMzQuNjY3DQoJCQlDNTE0LjA5NiwxNDUuNDE2LDUxNC4wOTYsMTMxLjkzMyw1MDUuNzU1LDEyMy41OTJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
          </HeaderNavItem>
        </HeaderNav>
        <HeaderNav>
          <HeaderIconItem>
            <Link to="/cart">
              <HeaderIcon src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDUwLjM5MSA0NTAuMzkxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTAuMzkxIDQ1MC4zOTE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik0xNDMuNjczLDM1MC4zMjJjLTI1Ljk2OSwwLTQ3LjAyLDIxLjA1Mi00Ny4wMiw0Ny4wMmMwLDI1Ljk2OSwyMS4wNTIsNDcuMDIsNDcuMDIsNDcuMDINCgkJCQljMjUuOTY5LDAsNDcuMDItMjEuMDUyLDQ3LjAyLTQ3LjAyQzE5MC42OTQsMzcxLjM3NCwxNjkuNjQyLDM1MC4zMjIsMTQzLjY3MywzNTAuMzIyeiBNMTQzLjY3Myw0MjMuNDY1DQoJCQkJYy0xNC40MjcsMC0yNi4xMjItMTEuNjk1LTI2LjEyMi0yNi4xMjJjMC0xNC40MjcsMTEuNjk1LTI2LjEyMiwyNi4xMjItMjYuMTIyYzE0LjQyNywwLDI2LjEyMiwxMS42OTUsMjYuMTIyLDI2LjEyMg0KCQkJCUMxNjkuNzk2LDQxMS43NywxNTguMSw0MjMuNDY1LDE0My42NzMsNDIzLjQ2NXoiLz4NCgkJCTxwYXRoIGQ9Ik0zNDIuMjA0LDM1MC4zMjJjLTI1Ljk2OSwwLTQ3LjAyLDIxLjA1Mi00Ny4wMiw0Ny4wMmMwLDI1Ljk2OSwyMS4wNTIsNDcuMDIsNDcuMDIsNDcuMDJzNDcuMDItMjEuMDUyLDQ3LjAyLTQ3LjAyDQoJCQkJQzM4OS4yMjQsMzcxLjM3NCwzNjguMTczLDM1MC4zMjIsMzQyLjIwNCwzNTAuMzIyeiBNMzQyLjIwNCw0MjMuNDY1Yy0xNC40MjcsMC0yNi4xMjItMTEuNjk1LTI2LjEyMi0yNi4xMjINCgkJCQljMC0xNC40MjcsMTEuNjk1LTI2LjEyMiwyNi4xMjItMjYuMTIyczI2LjEyMiwxMS42OTUsMjYuMTIyLDI2LjEyMkMzNjguMzI3LDQxMS43NywzNTYuNjMxLDQyMy40NjUsMzQyLjIwNCw0MjMuNDY1eiIvPg0KCQkJPHBhdGggZD0iTTQ0OC4yNjEsNzYuMDM3Yy0yLjE3Ni0yLjM3Ny01LjE1My0zLjg2NS04LjM1OS00LjE4TDk5Ljc4OCw2Ny4xNTVMOTAuMzg0LDM4LjQyDQoJCQkJQzgzLjc1OSwxOS4yMTEsNjUuNzcxLDYuMjQzLDQ1LjQ1Myw2LjAyOEgxMC40NDlDNC42NzgsNi4wMjgsMCwxMC43MDYsMCwxNi40NzdzNC42NzgsMTAuNDQ5LDEwLjQ0OSwxMC40NDloMzUuMDA0DQoJCQkJYzExLjM2MSwwLjI1MSwyMS4zNjUsNy41NDYsMjUuMDc4LDE4LjI4Nmw2Ni4zNTEsMjAwLjA5OGwtNS4yMjQsMTIuMDE2Yy01LjgyNywxNS4wMjYtNC4wNzcsMzEuOTM4LDQuNzAyLDQ1LjQ1Mw0KCQkJCWM4LjY5NSwxMy4yNzQsMjMuMzIzLDIxLjQ2NiwzOS4xODQsMjEuOTQzaDIwMy4yMzNjNS43NzEsMCwxMC40NDktNC42NzgsMTAuNDQ5LTEwLjQ0OWMwLTUuNzcxLTQuNjc4LTEwLjQ0OS0xMC40NDktMTAuNDQ5DQoJCQkJSDE3NS41NDNjLTguOTU3LTAuMjI0LTE3LjIwMi00LjkzNi0yMS45NDMtMTIuNTM5Yy00LjY4OC03LjUxLTUuNjUxLTE2Ljc2Mi0yLjYxMi0yNS4wNzhsNC4xOC05LjQwNGwyMTkuOTUxLTIyLjk4OA0KCQkJCWMyNC4xNi0yLjY2MSw0NC4wMzQtMjAuMjMzLDQ5LjYzMy00My44ODZsMjUuMDc4LTEwNS4wMTJDNDUwLjk2LDgxLjg5Myw0NTAuMzYsNzguNDkyLDQ0OC4yNjEsNzYuMDM3eiBNNDA0LjM3NiwxODUuMjI4DQoJCQkJYy0zLjM5MiwxNS4yMjYtMTYuMzE5LDI2LjQ1Ny0zMS44NjksMjcuNjlsLTIxNy4zMzksMjIuNDY1TDEwNi41OCw4OC4wNTNsMzIwLjI2MSw0LjcwMkw0MDQuMzc2LDE4NS4yMjh6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
            </Link>
          </HeaderIconItem>
          <HeaderIconItem>
            <Link to="/account">
              <HeaderIcon src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im0yNTYgNTEyYy02MC42MTUgMC0xMTkuNDA2LTIxLjU2NC0xNjUuNTQzLTYwLjcyMS0xMC44MzMtOS4xODgtMjAuOTk1LTE5LjM3NS0zMC4yMDEtMzAuMjc1LTM4Ljg1OS00Ni4wNi02MC4yNTYtMTA0LjY1Ny02MC4yNTYtMTY1LjAwNCAwLTY4LjM4MSAyNi42MjgtMTMyLjY2OCA3NC45OC0xODEuMDJzMTEyLjYzOS03NC45OCAxODEuMDItNzQuOTggMTMyLjY2OCAyNi42MjggMTgxLjAyIDc0Ljk4IDc0Ljk4IDExMi42MzkgNzQuOTggMTgxLjAyYzAgNjAuMzQ4LTIxLjM5NyAxMTguOTQ1LTYwLjI1MSAxNjQuOTk4LTkuMjExIDEwLjkwNi0xOS4zNzMgMjEuMDkzLTMwLjIwOSAzMC4yODQtNDYuMTM0IDM5LjE1NC0xMDQuOTI1IDYwLjcxOC0xNjUuNTQgNjAuNzE4em0wLTQ4MGMtMTIzLjUxNCAwLTIyNCAxMDAuNDg2LTIyNCAyMjQgMCA1Mi44MDUgMTguNzE5IDEwNC4wNzQgNTIuNzA5IDE0NC4zNjMgOC4wNiA5LjU0MyAxNi45NjEgMTguNDY2IDI2LjQ1MSAyNi41MTYgNDAuMzY0IDM0LjI1NiA5MS44MDEgNTMuMTIxIDE0NC44NCA1My4xMjFzMTA0LjQ3Ni0xOC44NjUgMTQ0LjgzNy01My4xMTljOS40OTMtOC4wNTIgMTguMzk0LTE2Ljk3NiAyNi40NTktMjYuNTI1IDMzLjk4NS00MC4yODEgNTIuNzA0LTkxLjU1IDUyLjcwNC0xNDQuMzU2IDAtMTIzLjUxNC0xMDAuNDg2LTIyNC0yMjQtMjI0eiIvPjxwYXRoIGQ9Im0yNTYgMjU2Yy01Mi45MzUgMC05Ni00My4wNjUtOTYtOTZzNDMuMDY1LTk2IDk2LTk2IDk2IDQzLjA2NSA5NiA5Ni00My4wNjUgOTYtOTYgOTZ6bTAtMTYwYy0zNS4yOSAwLTY0IDI4LjcxLTY0IDY0czI4LjcxIDY0IDY0IDY0IDY0LTI4LjcxIDY0LTY0LTI4LjcxLTY0LTY0LTY0eiIvPjxwYXRoIGQ9Im00MTEuMjAyIDQ1NS4wODRjLTEuMjkgMC0yLjYtLjE1Ny0zLjkwOC0uNDg1LTguNTctMi4xNTEtMTMuNzc0LTEwLjg0My0xMS42MjMtMTkuNDE0IDIuODcyLTExLjQ0MyA0LjMyOS0yMy4yODEgNC4zMjktMzUuMTg1IDAtNzguMjg1LTYzLjY0Ni0xNDIuODY2LTE0MS44OTMtMTQzLjk5bC0yLjEwNy0uMDEtMi4xMDcuMDFjLTc4LjI0NyAxLjEyNC0xNDEuODkzIDY1LjcwNS0xNDEuODkzIDE0My45OSAwIDExLjkwNCAxLjQ1NyAyMy43NDIgNC4zMjkgMzUuMTg1IDIuMTUxIDguNTcxLTMuMDUzIDE3LjI2My0xMS42MjMgMTkuNDE0cy0xNy4yNjMtMy4wNTItMTkuNDE0LTExLjYyM2MtMy41MTItMTMuOTg5LTUuMjkyLTI4LjQ0OC01LjI5Mi00Mi45NzYgMC00Ni41NzggMTguMDE3LTkwLjQ4MyA1MC43MzItMTIzLjYzIDMyLjY4My0zMy4xMTQgNzYuMjg1LTUxLjcwOCAxMjIuNzc0LTUyLjM1OC4wNzUtLjAwMS4xNDktLjAwMS4yMjQtLjAwMWwyLjI3LS4wMTEgMi4yNy4wMWMuMDc1IDAgLjE0OSAwIC4yMjQuMDAxIDQ2LjQ4OS42NDkgOTAuMDkxIDE5LjI0NCAxMjIuNzc0IDUyLjM1OCAzMi43MTUgMzMuMTQ4IDUwLjczMiA3Ny4wNTMgNTAuNzMyIDEyMy42MzEgMCAxNC41MjgtMS43OCAyOC45ODctNS4yOTIgNDIuOTc2LTEuODIzIDcuMjYyLTguMzQzIDEyLjEwNy0xNS41MDYgMTIuMTA4eiIvPjwvZz48L3N2Zz4=" />
            </Link>
          </HeaderIconItem>
        </HeaderNav>
      </HeaderSection>
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          borderBottom: '1px solid ',
          borderBottomColor: customColor.subColor,
          lineHeight: '0.1em',
          margin: '0',
        }}></div>
    </div>
  );
};
const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 22px;
  margin: 0;
`;

const Title = styled.p`
  font-size: 30px;
  color: ${customColor.mainColor};
  font-weight: bold;
  padding: 0;
  margin: 0;
`;

const HeaderNav = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;
// const HeaderIconNav = styled.ul`
//   display: flex;
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;
const HeaderNavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
`;

const HeaderIconItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  padding-left: 25px;
`;

const styledLink = {
  textDecoration: 'none',
  color: customColor.fontMainColor,
  fontSize: '20px',
};

const DropDwonIcon = styled.img`
  width: 14px;
  height: 14px;
  padding: 0;
  margin: 0;
  padding-left: 5px;
  cursor: pointer;
`;
const HeaderIcon = styled.img`
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
