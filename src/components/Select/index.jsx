import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
}
`;

const SelectEl = styled.select`
  appearance: none;
  border: 2px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.8);
  width: 100%;
  padding-left: 20px;
  padding-right: 60px;
  height: 50px;
  font-size: 1rem;
`;

// const Wrapper = styled.div`
//   position: relative;

//   &::after {
//     background-image: url('');
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: contain;
//     content: '';
//     display: block;
//     height: 16px;
//     position: absolute;
//     right: 14px;
//     top: 50%;
//     transform: translateY(-50%);
//     width: 16px;
//     z-index: 1;
//   }
// `;

export default function Select(props) {
  return (
    <Wrapper>
      <SelectEl {...props} />
    </Wrapper>
  );
}
