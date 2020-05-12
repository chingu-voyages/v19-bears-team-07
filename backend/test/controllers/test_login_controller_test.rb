require 'test_helper'

class TestLoginControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get test_login_index_url
    assert_response :success
  end

end
