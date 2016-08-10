import { test } from 'qunit';
import moduleForAcceptance from 'the-bartering-ram/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | homepage');

test('should list available items.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});

test('should link to login.', function (assert) {
  visit('/');
  click('a:contains("Login")');
  andThen(function () {
    assert.equal(currentURL(), '/login', 'should navigate to login');
  });
});

test('should link to register.', function (assert) {
  visit('/');
  click('a:contains("Register")');
  andThen(function () {
    assert.equal(currentURL(), '/register', 'should navigate to register');
  });
});
