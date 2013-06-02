require 'test_helper'

class SiteControllerTest < ActionController::TestCase
  test "should get festivals" do
    get :festivals
    assert_response :success
  end

  test "should get histroy" do
    get :histroy
    assert_response :success
  end

  test "should get vanshothpatti" do
    get :vanshothpatti
    assert_response :success
  end

  test "should get aboutus" do
    get :aboutus
    assert_response :success
  end

  test "should get demofalimytree" do
    get :demofalimytree
    assert_response :success
  end

end
