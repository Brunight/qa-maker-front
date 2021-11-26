import styled from 'styled-components'

export const Container = styled.div`
	.container-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	h1 {
		font-size: 70px;
		color: #41b932;
		padding: 50px;
	}

	.button {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 50px;
	}

	.add-symbol {
		color: white;
		background-color: #41b932;
		border-radius: 50%;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 35px;
		transform: translateX(-15px);
	}

	.add-text {
		color: #41b932;
		font-weight: 700;
		font-size: 20px;
	}

	ul {
		display: flex;
		justify-content: space-between;
    flex-direction: column;
		border-radius: 4px;
		width: 80%;
		margin: auto;
		list-style-type: none;
    overflow-y: auto;

		li {
			padding: 50px;
      background: white;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
      margin-bottom: 12px;

      p {
        width: 50%;
        overflow-y: hidden;
        max-height: 60px;
      }

      .icons{
        float: right;
      }
		}

    .select-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      float: right;
      transform: translateY(-70px);
      width: 14%;
    }
	}
`
