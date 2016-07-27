<?php
/**
 * Copyright (C) 2015 Digimedia Sp. z o.o. d/b/a Clearcode
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

namespace SevenTag\Plugin\PiwikCustomTemplateBundle\Tests\Template;

use Liip\FunctionalTestBundle\Test\WebTestCase;
use SevenTag\Api\TagBundle\Entity\Tag;
use SevenTag\Plugin\PiwikCustomTemplateBundle\Template\PiwikProvider;

/**
 * Class PiwikProviderTest
 * @package SevenTag\Plugin\PiwikCustomTemplateBundle\Tests
 */
class PiwikProviderTest extends WebTestCase
{
    /**
     * @var PiwikProvider
     */
    private $provider;

    /**
     * @before
     */
    public function beforeEach()
    {
        $this->provider = new PiwikProvider();
        $this->provider->setContainer($this->getContainer());
    }

    /**
     * @test
     */
    public function itReturnKey()
    {
        $this->assertEquals(PiwikProvider::KEY, $this->provider->getKey());
    }

    /**
     * @test
     */
    public function itReturnFormType()
    {
        $this->assertEquals('piwik_template_form_type', $this->provider->getFormType());
    }

    /**
     * @test
     */
    public function itPrePersistTag()
    {
        $tag = new Tag();
        $tag->setTemplateOptions(
            [
            'piwikUrl' => 'piwik.site.com',
            'piwikSiteId' => 'PIWIK-123'
            ]
        );

        $tag = $this->provider->prePersist($tag);

        $code = $tag->getCode();

        $this->assertRegExp(sprintf('/%s/i', preg_quote('piwik.site.com')), $code);
        $this->assertRegExp(sprintf('/%s/i', preg_quote('PIWIK-123')), $code);

        $this->assertFalse($tag->getDocumentWrite());
    }
}
