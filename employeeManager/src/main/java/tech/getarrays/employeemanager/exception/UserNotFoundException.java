package tech.getarrays.employeemanager.exception;

public class UserNotFoundException extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 3087723411734516901L;
	private String message;
	
	public UserNotFoundException() {
		// TODO Auto-generated constructor stub
	}
	
	
	public UserNotFoundException(String message) {
		super(message);
		this.message = message;
	}


	@Override
	public String getMessage() {
		// TODO Auto-generated method stub
		return super.getMessage();
	}
	
	@Override
	public String getLocalizedMessage() {
		// TODO Auto-generated method stub
		return super.getLocalizedMessage();
	}
}
