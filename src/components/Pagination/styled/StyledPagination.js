import styled from "styled-components";


const StyledPagination = styled.div`
		margin: 30px auto 50px auto;
		display: flex;
    	justify-content: flex-end;
    	
		.ant-pagination-prev:not(.ant-pagination-disabled):focus .ant-pagination-item-link, 
		.ant-pagination-next:not(.ant-pagination-disabled):focus .ant-pagination-item-link, 
		.ant-pagination-prev:not(.ant-pagination-disabled):hover .ant-pagination-item-link, 
		.ant-pagination-next:not(.ant-pagination-disabled):hover .ant-pagination-item-link {
			color: var(--blue);
		}
		
		.ant-pagination-prev:not(.ant-pagination-disabled):hover .ant-pagination-item-link, 
		.ant-pagination-next:not(.ant-pagination-disabled):hover .ant-pagination-item-link {
    		color: #000;
		}
		.ant-pagination-disabled, .ant-pagination-disabled:hover, .ant-pagination-disabled:focus {
    		cursor: not-allowed;
    		color: rgba(0, 0, 0, 0.25) !important;
		}
    
	    .ant-pagination-item:not(.ant-pagination-disabled):focus a, 
	    .ant-pagination-item:not(.ant-pagination-disabled):hover a {
	    	color: rgba(0, 0, 0, 0.85);
		}
  		.ant-pagination-item {
  			border: 1px solid #ddeaf0;
  			border-radius: 6px;
  		}
  		
  		.ant-pagination-item.ant-pagination-item-active {
		    background: var(--blue);
		    border-color: var(--blue);
		    color: #fff;
		     a {
		     	color: #fff;
		     	&:hover {
		     		color: #fff !important;
		     	}
		     }
  		}
  		
  		.ant-pagination-prev .ant-pagination-item-link, 
  		.ant-pagination-next .ant-pagination-item-link {
  			display: block;
		    width: 100%;
		    height: 100%;
		    font-size: 14px;
		    text-align: center;
		    background-color: transparent;
		    border: none;
		    border-radius: 2px;
		    outline: none;
  		}
`;

export default StyledPagination;

